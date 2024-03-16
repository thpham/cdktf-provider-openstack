# `dataOpenstackBlockstorageVolumeV3` Submodule <a name="`dataOpenstackBlockstorageVolumeV3` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackBlockstorageVolumeV3 <a name="DataOpenstackBlockstorageVolumeV3" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3 openstack_blockstorage_volume_v3}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3(scope: Construct, id: string, config?: DataOpenstackBlockstorageVolumeV3Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config">DataOpenstackBlockstorageVolumeV3Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config">DataOpenstackBlockstorageVolumeV3Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetBootable">resetBootable</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetVolumeType">resetVolumeType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBootable` <a name="resetBootable" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetBootable"></a>

```typescript
public resetBootable(): void
```

##### `resetHost` <a name="resetHost" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetadata` <a name="resetMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetMetadata"></a>

```typescript
public resetMetadata(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStatus` <a name="resetStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetVolumeType` <a name="resetVolumeType" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.resetVolumeType"></a>

```typescript
public resetVolumeType(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackBlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isConstruct"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformElement"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformDataSource"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackBlockstorageVolumeV3 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackBlockstorageVolumeV3 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackBlockstorageVolumeV3 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackBlockstorageVolumeV3 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.attachment">attachment</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList">DataOpenstackBlockstorageVolumeV3AttachmentList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.multiattach">multiattach</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.sourceVolumeId">sourceVolumeId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.bootableInput">bootableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.metadataInput">metadataInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.bootable">bootable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `attachment`<sup>Required</sup> <a name="attachment" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.attachment"></a>

```typescript
public readonly attachment: DataOpenstackBlockstorageVolumeV3AttachmentList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList">DataOpenstackBlockstorageVolumeV3AttachmentList</a>

---

##### `multiattach`<sup>Required</sup> <a name="multiattach" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.multiattach"></a>

```typescript
public readonly multiattach: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `size`<sup>Required</sup> <a name="size" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `sourceVolumeId`<sup>Required</sup> <a name="sourceVolumeId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.sourceVolumeId"></a>

```typescript
public readonly sourceVolumeId: string;
```

- *Type:* string

---

##### `bootableInput`<sup>Optional</sup> <a name="bootableInput" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.bootableInput"></a>

```typescript
public readonly bootableInput: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.metadataInput"></a>

```typescript
public readonly metadataInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `bootable`<sup>Required</sup> <a name="bootable" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.bootable"></a>

```typescript
public readonly bootable: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackBlockstorageVolumeV3Attachment <a name="DataOpenstackBlockstorageVolumeV3Attachment" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment.Initializer"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackBlockstorageVolumeV3Attachment: dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment = { ... }
```


### DataOpenstackBlockstorageVolumeV3Config <a name="DataOpenstackBlockstorageVolumeV3Config" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.Initializer"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackBlockstorageVolumeV3Config: dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.bootable">bootable</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#bootable DataOpenstackBlockstorageVolumeV3#bootable}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.host">host</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#host DataOpenstackBlockstorageVolumeV3#host}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#id DataOpenstackBlockstorageVolumeV3#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.metadata">metadata</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#metadata DataOpenstackBlockstorageVolumeV3#metadata}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#name DataOpenstackBlockstorageVolumeV3#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#region DataOpenstackBlockstorageVolumeV3#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#status DataOpenstackBlockstorageVolumeV3#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.volumeType">volumeType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#volume_type DataOpenstackBlockstorageVolumeV3#volume_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `bootable`<sup>Optional</sup> <a name="bootable" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.bootable"></a>

```typescript
public readonly bootable: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#bootable DataOpenstackBlockstorageVolumeV3#bootable}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#host DataOpenstackBlockstorageVolumeV3#host}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#id DataOpenstackBlockstorageVolumeV3#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.metadata"></a>

```typescript
public readonly metadata: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#metadata DataOpenstackBlockstorageVolumeV3#metadata}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#name DataOpenstackBlockstorageVolumeV3#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#region DataOpenstackBlockstorageVolumeV3#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#status DataOpenstackBlockstorageVolumeV3#status}.

---

##### `volumeType`<sup>Optional</sup> <a name="volumeType" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Config.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/blockstorage_volume_v3#volume_type DataOpenstackBlockstorageVolumeV3#volume_type}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackBlockstorageVolumeV3AttachmentList <a name="DataOpenstackBlockstorageVolumeV3AttachmentList" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.get"></a>

```typescript
public get(index: number): DataOpenstackBlockstorageVolumeV3AttachmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackBlockstorageVolumeV3AttachmentOutputReference <a name="DataOpenstackBlockstorageVolumeV3AttachmentOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer"></a>

```typescript
import { dataOpenstackBlockstorageVolumeV3 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.device">device</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.instanceId">instanceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment">DataOpenstackBlockstorageVolumeV3Attachment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `device`<sup>Required</sup> <a name="device" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.device"></a>

```typescript
public readonly device: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.instanceId"></a>

```typescript
public readonly instanceId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3AttachmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackBlockstorageVolumeV3Attachment;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackBlockstorageVolumeV3.DataOpenstackBlockstorageVolumeV3Attachment">DataOpenstackBlockstorageVolumeV3Attachment</a>

---



