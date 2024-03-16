# `dataOpenstackKeymanagerSecretV1` Submodule <a name="`dataOpenstackKeymanagerSecretV1` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackKeymanagerSecretV1 <a name="DataOpenstackKeymanagerSecretV1" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1 openstack_keymanager_secret_v1}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1(scope: Construct, id: string, config?: DataOpenstackKeymanagerSecretV1Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config">DataOpenstackKeymanagerSecretV1Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config">DataOpenstackKeymanagerSecretV1Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetAclOnly">resetAclOnly</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetAlgorithm">resetAlgorithm</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetBitLength">resetBitLength</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetCreatedAtFilter">resetCreatedAtFilter</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetExpirationFilter">resetExpirationFilter</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetMode">resetMode</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetSecretType">resetSecretType</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetUpdatedAtFilter">resetUpdatedAtFilter</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetAclOnly` <a name="resetAclOnly" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetAclOnly"></a>

```typescript
public resetAclOnly(): void
```

##### `resetAlgorithm` <a name="resetAlgorithm" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetAlgorithm"></a>

```typescript
public resetAlgorithm(): void
```

##### `resetBitLength` <a name="resetBitLength" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetBitLength"></a>

```typescript
public resetBitLength(): void
```

##### `resetCreatedAtFilter` <a name="resetCreatedAtFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetCreatedAtFilter"></a>

```typescript
public resetCreatedAtFilter(): void
```

##### `resetExpirationFilter` <a name="resetExpirationFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetExpirationFilter"></a>

```typescript
public resetExpirationFilter(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMode` <a name="resetMode" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetMode"></a>

```typescript
public resetMode(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretType` <a name="resetSecretType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetSecretType"></a>

```typescript
public resetSecretType(): void
```

##### `resetUpdatedAtFilter` <a name="resetUpdatedAtFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.resetUpdatedAtFilter"></a>

```typescript
public resetUpdatedAtFilter(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackKeymanagerSecretV1 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isConstruct"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isTerraformElement"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isTerraformDataSource"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.generateConfigForImport"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackKeymanagerSecretV1 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackKeymanagerSecretV1 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackKeymanagerSecretV1 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackKeymanagerSecretV1 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.acl">acl</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList">DataOpenstackKeymanagerSecretV1AclList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.contentTypes">contentTypes</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.creatorId">creatorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.metadata">metadata</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.payloadContentEncoding">payloadContentEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.payloadContentType">payloadContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.secretRef">secretRef</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.aclOnlyInput">aclOnlyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.algorithmInput">algorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.bitLengthInput">bitLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.createdAtFilterInput">createdAtFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.expirationFilterInput">expirationFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.modeInput">modeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.secretTypeInput">secretTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.updatedAtFilterInput">updatedAtFilterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.aclOnly">aclOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.algorithm">algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.bitLength">bitLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.createdAtFilter">createdAtFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.expirationFilter">expirationFilter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.secretType">secretType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.updatedAtFilter">updatedAtFilter</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `acl`<sup>Required</sup> <a name="acl" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.acl"></a>

```typescript
public readonly acl: DataOpenstackKeymanagerSecretV1AclList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList">DataOpenstackKeymanagerSecretV1AclList</a>

---

##### `contentTypes`<sup>Required</sup> <a name="contentTypes" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.contentTypes"></a>

```typescript
public readonly contentTypes: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `creatorId`<sup>Required</sup> <a name="creatorId" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.creatorId"></a>

```typescript
public readonly creatorId: string;
```

- *Type:* string

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `payload`<sup>Required</sup> <a name="payload" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `payloadContentEncoding`<sup>Required</sup> <a name="payloadContentEncoding" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.payloadContentEncoding"></a>

```typescript
public readonly payloadContentEncoding: string;
```

- *Type:* string

---

##### `payloadContentType`<sup>Required</sup> <a name="payloadContentType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.payloadContentType"></a>

```typescript
public readonly payloadContentType: string;
```

- *Type:* string

---

##### `secretRef`<sup>Required</sup> <a name="secretRef" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.secretRef"></a>

```typescript
public readonly secretRef: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `aclOnlyInput`<sup>Optional</sup> <a name="aclOnlyInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.aclOnlyInput"></a>

```typescript
public readonly aclOnlyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `algorithmInput`<sup>Optional</sup> <a name="algorithmInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.algorithmInput"></a>

```typescript
public readonly algorithmInput: string;
```

- *Type:* string

---

##### `bitLengthInput`<sup>Optional</sup> <a name="bitLengthInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.bitLengthInput"></a>

```typescript
public readonly bitLengthInput: number;
```

- *Type:* number

---

##### `createdAtFilterInput`<sup>Optional</sup> <a name="createdAtFilterInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.createdAtFilterInput"></a>

```typescript
public readonly createdAtFilterInput: string;
```

- *Type:* string

---

##### `expirationFilterInput`<sup>Optional</sup> <a name="expirationFilterInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.expirationFilterInput"></a>

```typescript
public readonly expirationFilterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.modeInput"></a>

```typescript
public readonly modeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretTypeInput`<sup>Optional</sup> <a name="secretTypeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.secretTypeInput"></a>

```typescript
public readonly secretTypeInput: string;
```

- *Type:* string

---

##### `updatedAtFilterInput`<sup>Optional</sup> <a name="updatedAtFilterInput" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.updatedAtFilterInput"></a>

```typescript
public readonly updatedAtFilterInput: string;
```

- *Type:* string

---

##### `aclOnly`<sup>Required</sup> <a name="aclOnly" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.aclOnly"></a>

```typescript
public readonly aclOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `algorithm`<sup>Required</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

---

##### `bitLength`<sup>Required</sup> <a name="bitLength" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.bitLength"></a>

```typescript
public readonly bitLength: number;
```

- *Type:* number

---

##### `createdAtFilter`<sup>Required</sup> <a name="createdAtFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.createdAtFilter"></a>

```typescript
public readonly createdAtFilter: string;
```

- *Type:* string

---

##### `expirationFilter`<sup>Required</sup> <a name="expirationFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.expirationFilter"></a>

```typescript
public readonly expirationFilter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretType`<sup>Required</sup> <a name="secretType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

---

##### `updatedAtFilter`<sup>Required</sup> <a name="updatedAtFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.updatedAtFilter"></a>

```typescript
public readonly updatedAtFilter: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackKeymanagerSecretV1Acl <a name="DataOpenstackKeymanagerSecretV1Acl" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Acl"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Acl.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackKeymanagerSecretV1Acl: dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Acl = { ... }
```


### DataOpenstackKeymanagerSecretV1AclRead <a name="DataOpenstackKeymanagerSecretV1AclRead" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclRead"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclRead.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackKeymanagerSecretV1AclRead: dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclRead = { ... }
```


### DataOpenstackKeymanagerSecretV1Config <a name="DataOpenstackKeymanagerSecretV1Config" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackKeymanagerSecretV1Config: dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.aclOnly">aclOnly</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#acl_only DataOpenstackKeymanagerSecretV1#acl_only}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.algorithm">algorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#algorithm DataOpenstackKeymanagerSecretV1#algorithm}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.bitLength">bitLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#bit_length DataOpenstackKeymanagerSecretV1#bit_length}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.createdAtFilter">createdAtFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#created_at_filter DataOpenstackKeymanagerSecretV1#created_at_filter}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.expirationFilter">expirationFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#expiration_filter DataOpenstackKeymanagerSecretV1#expiration_filter}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#id DataOpenstackKeymanagerSecretV1#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.mode">mode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#mode DataOpenstackKeymanagerSecretV1#mode}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#name DataOpenstackKeymanagerSecretV1#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#region DataOpenstackKeymanagerSecretV1#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.secretType">secretType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#secret_type DataOpenstackKeymanagerSecretV1#secret_type}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.updatedAtFilter">updatedAtFilter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#updated_at_filter DataOpenstackKeymanagerSecretV1#updated_at_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `aclOnly`<sup>Optional</sup> <a name="aclOnly" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.aclOnly"></a>

```typescript
public readonly aclOnly: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#acl_only DataOpenstackKeymanagerSecretV1#acl_only}.

---

##### `algorithm`<sup>Optional</sup> <a name="algorithm" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.algorithm"></a>

```typescript
public readonly algorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#algorithm DataOpenstackKeymanagerSecretV1#algorithm}.

---

##### `bitLength`<sup>Optional</sup> <a name="bitLength" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.bitLength"></a>

```typescript
public readonly bitLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#bit_length DataOpenstackKeymanagerSecretV1#bit_length}.

---

##### `createdAtFilter`<sup>Optional</sup> <a name="createdAtFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.createdAtFilter"></a>

```typescript
public readonly createdAtFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#created_at_filter DataOpenstackKeymanagerSecretV1#created_at_filter}.

---

##### `expirationFilter`<sup>Optional</sup> <a name="expirationFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.expirationFilter"></a>

```typescript
public readonly expirationFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#expiration_filter DataOpenstackKeymanagerSecretV1#expiration_filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#id DataOpenstackKeymanagerSecretV1#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mode`<sup>Optional</sup> <a name="mode" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#mode DataOpenstackKeymanagerSecretV1#mode}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#name DataOpenstackKeymanagerSecretV1#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#region DataOpenstackKeymanagerSecretV1#region}.

---

##### `secretType`<sup>Optional</sup> <a name="secretType" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.secretType"></a>

```typescript
public readonly secretType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#secret_type DataOpenstackKeymanagerSecretV1#secret_type}.

---

##### `updatedAtFilter`<sup>Optional</sup> <a name="updatedAtFilter" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Config.property.updatedAtFilter"></a>

```typescript
public readonly updatedAtFilter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/keymanager_secret_v1#updated_at_filter DataOpenstackKeymanagerSecretV1#updated_at_filter}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackKeymanagerSecretV1AclList <a name="DataOpenstackKeymanagerSecretV1AclList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.get"></a>

```typescript
public get(index: number): DataOpenstackKeymanagerSecretV1AclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackKeymanagerSecretV1AclOutputReference <a name="DataOpenstackKeymanagerSecretV1AclOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.property.read">read</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList">DataOpenstackKeymanagerSecretV1AclReadList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Acl">DataOpenstackKeymanagerSecretV1Acl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.property.read"></a>

```typescript
public readonly read: DataOpenstackKeymanagerSecretV1AclReadList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList">DataOpenstackKeymanagerSecretV1AclReadList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackKeymanagerSecretV1Acl;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1Acl">DataOpenstackKeymanagerSecretV1Acl</a>

---


### DataOpenstackKeymanagerSecretV1AclReadList <a name="DataOpenstackKeymanagerSecretV1AclReadList" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.get"></a>

```typescript
public get(index: number): DataOpenstackKeymanagerSecretV1AclReadOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackKeymanagerSecretV1AclReadOutputReference <a name="DataOpenstackKeymanagerSecretV1AclReadOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer"></a>

```typescript
import { dataOpenstackKeymanagerSecretV1 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.projectAccess">projectAccess</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.users">users</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclRead">DataOpenstackKeymanagerSecretV1AclRead</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `projectAccess`<sup>Required</sup> <a name="projectAccess" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.projectAccess"></a>

```typescript
public readonly projectAccess: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `users`<sup>Required</sup> <a name="users" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.users"></a>

```typescript
public readonly users: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclReadOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackKeymanagerSecretV1AclRead;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackKeymanagerSecretV1.DataOpenstackKeymanagerSecretV1AclRead">DataOpenstackKeymanagerSecretV1AclRead</a>

---



