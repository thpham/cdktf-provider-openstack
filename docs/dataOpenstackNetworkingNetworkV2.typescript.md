# `dataOpenstackNetworkingNetworkV2` Submodule <a name="`dataOpenstackNetworkingNetworkV2` Submodule" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOpenstackNetworkingNetworkV2 <a name="DataOpenstackNetworkingNetworkV2" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2"></a>

Represents a {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2 openstack_networking_network_v2}.

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2(scope: Construct, id: string, config?: DataOpenstackNetworkingNetworkV2Config)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.config">config</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config">DataOpenstackNetworkingNetworkV2Config</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.Initializer.parameter.config"></a>

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config">DataOpenstackNetworkingNetworkV2Config</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetMatchingSubnetCidr">resetMatchingSubnetCidr</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetMtu">resetMtu</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetNetworkId">resetNetworkId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTenantId">resetTenantId</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTransparentVlan">resetTransparentVlan</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDescription` <a name="resetDescription" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetExternal` <a name="resetExternal" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetExternal"></a>

```typescript
public resetExternal(): void
```

##### `resetId` <a name="resetId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatchingSubnetCidr` <a name="resetMatchingSubnetCidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetMatchingSubnetCidr"></a>

```typescript
public resetMatchingSubnetCidr(): void
```

##### `resetMtu` <a name="resetMtu" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetMtu"></a>

```typescript
public resetMtu(): void
```

##### `resetName` <a name="resetName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetName"></a>

```typescript
public resetName(): void
```

##### `resetNetworkId` <a name="resetNetworkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetNetworkId"></a>

```typescript
public resetNetworkId(): void
```

##### `resetRegion` <a name="resetRegion" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetStatus` <a name="resetStatus" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetStatus"></a>

```typescript
public resetStatus(): void
```

##### `resetTags` <a name="resetTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTenantId` <a name="resetTenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTenantId"></a>

```typescript
public resetTenantId(): void
```

##### `resetTransparentVlan` <a name="resetTransparentVlan" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.resetTransparentVlan"></a>

```typescript
public resetTransparentVlan(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOpenstackNetworkingNetworkV2 resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isConstruct"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformElement"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformDataSource"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataOpenstackNetworkingNetworkV2 resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataOpenstackNetworkingNetworkV2 to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataOpenstackNetworkingNetworkV2 that should be imported.

Refer to the {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOpenstackNetworkingNetworkV2 to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.adminStateUp">adminStateUp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.allTags">allTags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.availabilityZoneHints">availabilityZoneHints</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.dnsDomain">dnsDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.segments">segments</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList">DataOpenstackNetworkingNetworkV2SegmentsList</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.shared">shared</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.externalInput">externalInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.matchingSubnetCidrInput">matchingSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.mtuInput">mtuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.networkIdInput">networkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tagsInput">tagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tenantIdInput">tenantIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.transparentVlanInput">transparentVlanInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.external">external</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.matchingSubnetCidr">matchingSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.mtu">mtu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.networkId">networkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tags">tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.transparentVlan">transparentVlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `adminStateUp`<sup>Required</sup> <a name="adminStateUp" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.adminStateUp"></a>

```typescript
public readonly adminStateUp: string;
```

- *Type:* string

---

##### `allTags`<sup>Required</sup> <a name="allTags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.allTags"></a>

```typescript
public readonly allTags: string[];
```

- *Type:* string[]

---

##### `availabilityZoneHints`<sup>Required</sup> <a name="availabilityZoneHints" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.availabilityZoneHints"></a>

```typescript
public readonly availabilityZoneHints: string[];
```

- *Type:* string[]

---

##### `dnsDomain`<sup>Required</sup> <a name="dnsDomain" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.dnsDomain"></a>

```typescript
public readonly dnsDomain: string;
```

- *Type:* string

---

##### `segments`<sup>Required</sup> <a name="segments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.segments"></a>

```typescript
public readonly segments: DataOpenstackNetworkingNetworkV2SegmentsList;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList">DataOpenstackNetworkingNetworkV2SegmentsList</a>

---

##### `shared`<sup>Required</sup> <a name="shared" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.shared"></a>

```typescript
public readonly shared: string;
```

- *Type:* string

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.externalInput"></a>

```typescript
public readonly externalInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchingSubnetCidrInput`<sup>Optional</sup> <a name="matchingSubnetCidrInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.matchingSubnetCidrInput"></a>

```typescript
public readonly matchingSubnetCidrInput: string;
```

- *Type:* string

---

##### `mtuInput`<sup>Optional</sup> <a name="mtuInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.mtuInput"></a>

```typescript
public readonly mtuInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkIdInput`<sup>Optional</sup> <a name="networkIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.networkIdInput"></a>

```typescript
public readonly networkIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tagsInput"></a>

```typescript
public readonly tagsInput: string[];
```

- *Type:* string[]

---

##### `tenantIdInput`<sup>Optional</sup> <a name="tenantIdInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tenantIdInput"></a>

```typescript
public readonly tenantIdInput: string;
```

- *Type:* string

---

##### `transparentVlanInput`<sup>Optional</sup> <a name="transparentVlanInput" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.transparentVlanInput"></a>

```typescript
public readonly transparentVlanInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `external`<sup>Required</sup> <a name="external" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.external"></a>

```typescript
public readonly external: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchingSubnetCidr`<sup>Required</sup> <a name="matchingSubnetCidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.matchingSubnetCidr"></a>

```typescript
public readonly matchingSubnetCidr: string;
```

- *Type:* string

---

##### `mtu`<sup>Required</sup> <a name="mtu" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkId`<sup>Required</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `transparentVlan`<sup>Required</sup> <a name="transparentVlan" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.transparentVlan"></a>

```typescript
public readonly transparentVlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOpenstackNetworkingNetworkV2Config <a name="DataOpenstackNetworkingNetworkV2Config" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.Initializer"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingNetworkV2Config: dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#description DataOpenstackNetworkingNetworkV2#description}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.external">external</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#external DataOpenstackNetworkingNetworkV2#external}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#id DataOpenstackNetworkingNetworkV2#id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.matchingSubnetCidr">matchingSubnetCidr</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#matching_subnet_cidr DataOpenstackNetworkingNetworkV2#matching_subnet_cidr}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.mtu">mtu</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#mtu DataOpenstackNetworkingNetworkV2#mtu}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#name DataOpenstackNetworkingNetworkV2#name}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.networkId">networkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#network_id DataOpenstackNetworkingNetworkV2#network_id}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#region DataOpenstackNetworkingNetworkV2#region}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#status DataOpenstackNetworkingNetworkV2#status}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.tags">tags</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tags DataOpenstackNetworkingNetworkV2#tags}. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.tenantId">tenantId</a></code> | <code>string</code> | The ID of the Tenant (Identity v2) or Project (Identity v3) to login with. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.transparentVlan">transparentVlan</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#transparent_vlan DataOpenstackNetworkingNetworkV2#transparent_vlan}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `description`<sup>Optional</sup> <a name="description" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#description DataOpenstackNetworkingNetworkV2#description}.

---

##### `external`<sup>Optional</sup> <a name="external" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.external"></a>

```typescript
public readonly external: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#external DataOpenstackNetworkingNetworkV2#external}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#id DataOpenstackNetworkingNetworkV2#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matchingSubnetCidr`<sup>Optional</sup> <a name="matchingSubnetCidr" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.matchingSubnetCidr"></a>

```typescript
public readonly matchingSubnetCidr: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#matching_subnet_cidr DataOpenstackNetworkingNetworkV2#matching_subnet_cidr}.

---

##### `mtu`<sup>Optional</sup> <a name="mtu" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.mtu"></a>

```typescript
public readonly mtu: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#mtu DataOpenstackNetworkingNetworkV2#mtu}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#name DataOpenstackNetworkingNetworkV2#name}.

---

##### `networkId`<sup>Optional</sup> <a name="networkId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.networkId"></a>

```typescript
public readonly networkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#network_id DataOpenstackNetworkingNetworkV2#network_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#region DataOpenstackNetworkingNetworkV2#region}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#status DataOpenstackNetworkingNetworkV2#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.tags"></a>

```typescript
public readonly tags: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tags DataOpenstackNetworkingNetworkV2#tags}.

---

##### `tenantId`<sup>Optional</sup> <a name="tenantId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

The ID of the Tenant (Identity v2) or Project (Identity v3) to login with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#tenant_id DataOpenstackNetworkingNetworkV2#tenant_id}

---

##### `transparentVlan`<sup>Optional</sup> <a name="transparentVlan" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Config.property.transparentVlan"></a>

```typescript
public readonly transparentVlan: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-provider-openstack/openstack/1.54.1/docs/data-sources/networking_network_v2#transparent_vlan DataOpenstackNetworkingNetworkV2#transparent_vlan}.

---

### DataOpenstackNetworkingNetworkV2Segments <a name="DataOpenstackNetworkingNetworkV2Segments" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments"></a>

#### Initializer <a name="Initializer" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments.Initializer"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

const dataOpenstackNetworkingNetworkV2Segments: dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataOpenstackNetworkingNetworkV2SegmentsList <a name="DataOpenstackNetworkingNetworkV2SegmentsList" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.get"></a>

```typescript
public get(index: number): DataOpenstackNetworkingNetworkV2SegmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataOpenstackNetworkingNetworkV2SegmentsOutputReference <a name="DataOpenstackNetworkingNetworkV2SegmentsOutputReference" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer"></a>

```typescript
import { dataOpenstackNetworkingNetworkV2 } from '@ithings/cdktf-provider-openstack'

new dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.networkType">networkType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.physicalNetwork">physicalNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.segmentationId">segmentationId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments">DataOpenstackNetworkingNetworkV2Segments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `networkType`<sup>Required</sup> <a name="networkType" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.networkType"></a>

```typescript
public readonly networkType: string;
```

- *Type:* string

---

##### `physicalNetwork`<sup>Required</sup> <a name="physicalNetwork" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.physicalNetwork"></a>

```typescript
public readonly physicalNetwork: string;
```

- *Type:* string

---

##### `segmentationId`<sup>Required</sup> <a name="segmentationId" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.segmentationId"></a>

```typescript
public readonly segmentationId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2SegmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataOpenstackNetworkingNetworkV2Segments;
```

- *Type:* <a href="#@ithings/cdktf-provider-openstack.dataOpenstackNetworkingNetworkV2.DataOpenstackNetworkingNetworkV2Segments">DataOpenstackNetworkingNetworkV2Segments</a>

---



